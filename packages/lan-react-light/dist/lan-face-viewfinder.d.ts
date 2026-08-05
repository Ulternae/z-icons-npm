import React from 'react';

export interface LanFaceViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceViewfinder(props: LanFaceViewfinderProps): React.ReactElement;
export default LanFaceViewfinder;
