import React from 'react';

export interface LanFaceAstonishedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAstonished(props: LanFaceAstonishedProps): React.ReactElement;
export default LanFaceAstonished;
