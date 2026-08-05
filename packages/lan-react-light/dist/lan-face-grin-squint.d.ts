import React from 'react';

export interface LanFaceGrinSquintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinSquint(props: LanFaceGrinSquintProps): React.ReactElement;
export default LanFaceGrinSquint;
