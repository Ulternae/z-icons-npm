import React from 'react';

export interface LanFileXmlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXmlThin(props: LanFileXmlThinProps): React.ReactElement;
export default LanFileXmlThin;
