import React from 'react';

export interface LanOpenCaptioningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOpenCaptioningSolid(props: LanOpenCaptioningSolidProps): React.ReactElement;
export default LanOpenCaptioningSolid;
