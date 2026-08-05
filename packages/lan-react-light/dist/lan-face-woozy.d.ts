import React from 'react';

export interface LanFaceWoozyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWoozy(props: LanFaceWoozyProps): React.ReactElement;
export default LanFaceWoozy;
