import React from 'react';

export interface CorePhoneXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneXmark(props: CorePhoneXmarkProps): React.ReactElement;
export default CorePhoneXmark;
