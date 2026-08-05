import React from 'react';

export interface LanGeminiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGeminiRegular(props: LanGeminiRegularProps): React.ReactElement;
export default LanGeminiRegular;
