import React from 'react';

export interface LanGemProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGem(props: LanGemProps): React.ReactElement;
export default LanGem;
