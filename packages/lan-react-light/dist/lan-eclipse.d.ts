import React from 'react';

export interface LanEclipseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEclipse(props: LanEclipseProps): React.ReactElement;
export default LanEclipse;
