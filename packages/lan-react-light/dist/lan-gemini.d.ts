import React from 'react';

export interface LanGeminiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGemini(props: LanGeminiProps): React.ReactElement;
export default LanGemini;
