import React from 'react';

export interface MinaHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadphonesSolid(props: MinaHeadphonesSolidProps): React.ReactElement;
export default MinaHeadphonesSolid;
