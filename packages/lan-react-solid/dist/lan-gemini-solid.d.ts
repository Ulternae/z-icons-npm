import React from 'react';

export interface LanGeminiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGeminiSolid(props: LanGeminiSolidProps): React.ReactElement;
export default LanGeminiSolid;
