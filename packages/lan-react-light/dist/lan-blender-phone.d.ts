import React from 'react';

export interface LanBlenderPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlenderPhone(props: LanBlenderPhoneProps): React.ReactElement;
export default LanBlenderPhone;
