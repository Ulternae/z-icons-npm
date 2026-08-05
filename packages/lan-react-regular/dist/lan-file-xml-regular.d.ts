import React from 'react';

export interface LanFileXmlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXmlRegular(props: LanFileXmlRegularProps): React.ReactElement;
export default LanFileXmlRegular;
