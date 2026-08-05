import React from 'react';

export interface CoreClipboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClipboardRegularDuo(props: CoreClipboardRegularDuoProps): React.ReactElement;
export default CoreClipboardRegularDuo;
