import React from 'react';

export interface CorePhoneHangupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneHangup(props: CorePhoneHangupProps): React.ReactElement;
export default CorePhoneHangup;
