import React from 'react';

export interface LanBoxingGloveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxingGloveRegular(props: LanBoxingGloveRegularProps): React.ReactElement;
export default LanBoxingGloveRegular;
