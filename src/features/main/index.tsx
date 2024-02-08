import { Button, Input, Paragraph, Title } from "@/shared/ui";
import { ImageBackground, ScrollView, View } from "react-native";
import { style } from "./_style";
import { ProjectItem } from "./_components/projectItem";
import { MainProjectBanner } from "./_components/mainProjectBanner";
import FormBackgroundImage from "#/images/other/form-question-background.jpeg";
import { OrganizationInfo } from "@/shared/components";

const TEXT =
  "Житловий комплекс розташований в одному з найперспективніших районів міста, забезпечуючи легкий доступ до міської інфраструктури, освітніх установ, медичних центрів і парків.";
const TEXT1 =
  "Модерн Хайтс - інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору.";

export const Main = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.mainContainer}>
      <MainProjectBanner text={TEXT1} />
      <View style={style.ourProjectsContainer}>
        <Title style={style.ourProjectTitle}>Наші проекти</Title>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={style.projectsContainer}>
            <ProjectItem text={TEXT} link="/(tabs)/" />
            <ProjectItem text={TEXT} link="/(tabs)/" />
            <ProjectItem text={TEXT} link="/(tabs)/" />
          </View>
        </ScrollView>
      </View>

      <View style={style.ourProjectsContainer}>
        <Title style={style.ourProjectTitle}>Наші забудовники</Title>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={style.projectsContainer}>
            <ProjectItem text={TEXT} link="/(tabs)/" />
            <ProjectItem text={TEXT} link="/(tabs)/" />
            <ProjectItem text={TEXT} link="/(tabs)/" />
          </View>
        </ScrollView>
      </View>

      <View style={style.questionFormContainer}>
        <ImageBackground
          source={FormBackgroundImage}
          resizeMode="stretch"
          style={style.backgroundImage}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={style.backGroundDarkening} />
          <View style={style.contentContainer}>
            <Title
              style={style.contentTitle}
            >{`Хочете стати інвестором,${"\n"}але є питання?`}</Title>
            <Paragraph style={style.contentText}>
              Залиште заявку на безкоштовний дзвінок, ми зв’яжемося з вами протягом 20 хвилин
            </Paragraph>

            <View style={style.contentFormContainer}>
              <Input placeHolder="Ім’я" />
              <Input placeHolder="Ім’я" />
              <Button title="Замовити дзвінок" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <OrganizationInfo />
    </ScrollView>
  );
};
