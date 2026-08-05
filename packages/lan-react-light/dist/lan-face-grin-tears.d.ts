import React from 'react';

export interface LanFaceGrinTearsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinTears(props: LanFaceGrinTearsProps): React.ReactElement;
export default LanFaceGrinTears;
