import React from 'react';

export interface LanPhoneOfficeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneOffice(props: LanPhoneOfficeProps): React.ReactElement;
export default LanPhoneOffice;
