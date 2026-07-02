import React from 'react';

export interface CoreClipboardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClipboardCheck(props: CoreClipboardCheckProps): React.ReactElement;
export default CoreClipboardCheck;
