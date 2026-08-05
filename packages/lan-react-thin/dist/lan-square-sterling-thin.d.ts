import React from 'react';

export interface LanSquareSterlingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSterlingThin(props: LanSquareSterlingThinProps): React.ReactElement;
export default LanSquareSterlingThin;
