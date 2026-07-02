import React from 'react';

export interface CoreHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeadphonesSolid(props: CoreHeadphonesSolidProps): React.ReactElement;
export default CoreHeadphonesSolid;
