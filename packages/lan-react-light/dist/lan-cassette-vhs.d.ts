import React from 'react';

export interface LanCassetteVhsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteVhs(props: LanCassetteVhsProps): React.ReactElement;
export default LanCassetteVhs;
