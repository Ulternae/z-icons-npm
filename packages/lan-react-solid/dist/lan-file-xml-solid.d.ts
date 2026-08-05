import React from 'react';

export interface LanFileXmlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXmlSolid(props: LanFileXmlSolidProps): React.ReactElement;
export default LanFileXmlSolid;
