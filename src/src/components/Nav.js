import { useState, useEffect } from "react";
// import Image from 'next/image'

import {
  faSignOutAlt,
  faPlusCircle,
  faUserAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import View from "./View";
import Modal from "./Modal";
import UserItem from "./UserItem";
import Button from "./Button";

import { getToken, removeToken } from "../auth/Storage";

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  useEffect(() => {
    getTokenFromStorage();
  }, []);

  const getTokenFromStorage = async () => {
    setToken(await getToken());
  };
  // console.log(token);
  return (
    <div className="nav">
      {/* left side  */}
      <View className="mobile--show" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </View>
      {!token ? (
        <View className="mobile--hide">
          <Button onClick={() => router.push("/signup")} label="انشاء حساب" />
          <Button
            onClick={() => router.push("/login")}
            backgroundColor="transparent"
            color="white"
            label="تسجيل دخول"
          />
        </View>
      ) : (
        <View className="mobile--hide">
          <Button
            onClick={() => {
              removeToken();
              router.push("/");
            }}
            backgroundColor="transparent"
            color="tomato"
            label="تسجيل خروج"
          />
        </View>
      )}

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <View mh={2} mv={2}>
          {token ? null : (
            <>
              <UserItem
                name=" انشاء حساب "
                onClick={() => router.push("/signup")}
                pv={1}
                icon={faPlusCircle}
                color="#303030"
              />

              <UserItem
                name="تسجيل دخول"
                onClick={() => router.push("/login")}
                pv={1}
                icon={faUserAlt}
                color="#303030"
              />
            </>
          )}
          {token ? (
            <UserItem
              name="تسجيل خروج"
              onClick={() => {
                removeToken();
                setToken(null);
                router.push("/");
              }}
              pv={1}
              color="tomato"
              icon={faSignOutAlt}
            />
          ) : null}
        </View>
      </Modal>
      <View display="flex" alignItems="center" onClick={() => router.push("/")}>
        {/* <View ph={0.5}>
          <img src="/logo.svg" className="brand__icon" />
        </View> */}
        <p className="nav__brand">Mento</p>
      </View>
    </div>
  );
}
