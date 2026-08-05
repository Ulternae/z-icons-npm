import React from 'react';

export interface LanNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNewspaper(props: LanNewspaperProps): React.ReactElement;
export default LanNewspaper;
