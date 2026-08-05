import React from 'react';

export interface LanFiltersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFiltersRegular(props: LanFiltersRegularProps): React.ReactElement;
export default LanFiltersRegular;
