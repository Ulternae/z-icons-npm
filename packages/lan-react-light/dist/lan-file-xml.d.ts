import React from 'react';

export interface LanFileXmlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXml(props: LanFileXmlProps): React.ReactElement;
export default LanFileXml;
