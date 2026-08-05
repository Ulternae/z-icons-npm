import React from 'react';

export interface LanCircleSterlingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSterlingThin(props: LanCircleSterlingThinProps): React.ReactElement;
export default LanCircleSterlingThin;
