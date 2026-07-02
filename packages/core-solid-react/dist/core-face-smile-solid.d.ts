import React from 'react';

export interface CoreFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceSmileSolid(props: CoreFaceSmileSolidProps): React.ReactElement;
export default CoreFaceSmileSolid;
