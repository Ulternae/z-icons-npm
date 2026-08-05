import React from 'react';

export interface LanGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlasses(props: LanGlassesProps): React.ReactElement;
export default LanGlasses;
