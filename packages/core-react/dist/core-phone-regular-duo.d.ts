import React from 'react';

export interface CorePhoneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneRegularDuo(props: CorePhoneRegularDuoProps): React.ReactElement;
export default CorePhoneRegularDuo;
