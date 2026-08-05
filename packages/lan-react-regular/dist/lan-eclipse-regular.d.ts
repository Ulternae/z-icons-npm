import React from 'react';

export interface LanEclipseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEclipseRegular(props: LanEclipseRegularProps): React.ReactElement;
export default LanEclipseRegular;
