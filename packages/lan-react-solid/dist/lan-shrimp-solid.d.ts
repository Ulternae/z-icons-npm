import React from 'react';

export interface LanShrimpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShrimpSolid(props: LanShrimpSolidProps): React.ReactElement;
export default LanShrimpSolid;
