import React from 'react';

export interface LanGemSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGemSolid(props: LanGemSolidProps): React.ReactElement;
export default LanGemSolid;
