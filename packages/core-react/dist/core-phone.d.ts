import React from 'react';

export interface CorePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhone(props: CorePhoneProps): React.ReactElement;
export default CorePhone;
