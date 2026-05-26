import React from 'react';

export interface LanPhoneOfficeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneOffice: React.FC<LanPhoneOfficeProps>;
export default LanPhoneOffice;
