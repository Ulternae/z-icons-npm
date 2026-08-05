import React from 'react';

export interface LanPhoneXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneXmark(props: LanPhoneXmarkProps): React.ReactElement;
export default LanPhoneXmark;
