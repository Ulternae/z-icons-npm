import React from 'react';

export interface NeoLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLandmark(props: NeoLandmarkProps): React.ReactElement;
export default NeoLandmark;
