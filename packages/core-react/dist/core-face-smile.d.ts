import React from 'react';

export interface CoreFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceSmile(props: CoreFaceSmileProps): React.ReactElement;
export default CoreFaceSmile;
