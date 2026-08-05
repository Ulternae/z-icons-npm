import React from 'react';

export interface LanFaceHandYawnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHandYawn(props: LanFaceHandYawnProps): React.ReactElement;
export default LanFaceHandYawn;
