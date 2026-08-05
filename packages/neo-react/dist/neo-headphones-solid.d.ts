import React from 'react';

export interface NeoHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeadphonesSolid(props: NeoHeadphonesSolidProps): React.ReactElement;
export default NeoHeadphonesSolid;
