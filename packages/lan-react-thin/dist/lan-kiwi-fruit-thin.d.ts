import React from 'react';

export interface LanKiwiFruitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiFruitThin(props: LanKiwiFruitThinProps): React.ReactElement;
export default LanKiwiFruitThin;
