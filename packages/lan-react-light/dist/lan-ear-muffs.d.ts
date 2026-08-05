import React from 'react';

export interface LanEarMuffsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarMuffs(props: LanEarMuffsProps): React.ReactElement;
export default LanEarMuffs;
