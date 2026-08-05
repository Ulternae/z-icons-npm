import React from 'react';

export interface LanFaceEyesXmarksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceEyesXmarks(props: LanFaceEyesXmarksProps): React.ReactElement;
export default LanFaceEyesXmarks;
