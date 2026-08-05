import React from 'react';

export interface LanGeminiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGeminiThin(props: LanGeminiThinProps): React.ReactElement;
export default LanGeminiThin;
