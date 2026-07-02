import React from 'react';

export interface CoreClosedCaptioningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClosedCaptioningSolid(props: CoreClosedCaptioningSolidProps): React.ReactElement;
export default CoreClosedCaptioningSolid;
