import React from 'react';

export interface LanUserMdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMd(props: LanUserMdProps): React.ReactElement;
export default LanUserMd;
