import React from 'react';

export interface LanIdCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCard(props: LanIdCardProps): React.ReactElement;
export default LanIdCard;
