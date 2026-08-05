import React from 'react';

export interface LanFaceGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGlasses(props: LanFaceGlassesProps): React.ReactElement;
export default LanFaceGlasses;
