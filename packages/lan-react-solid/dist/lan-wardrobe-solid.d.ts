import React from 'react';

export interface LanWardrobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWardrobeSolid(props: LanWardrobeSolidProps): React.ReactElement;
export default LanWardrobeSolid;
