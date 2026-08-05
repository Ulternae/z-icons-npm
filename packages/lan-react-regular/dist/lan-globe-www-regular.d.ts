import React from 'react';

export interface LanGlobeWwwRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWwwRegular(props: LanGlobeWwwRegularProps): React.ReactElement;
export default LanGlobeWwwRegular;
