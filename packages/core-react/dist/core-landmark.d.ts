import React from 'react';

export interface CoreLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLandmark(props: CoreLandmarkProps): React.ReactElement;
export default CoreLandmark;
